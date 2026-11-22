"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useBranch } from "@/context/BranchContext";
import { BOOKING_OPTIONS, DEFAULT_TIME_SLOT, DURATIONS, TIME_SLOTS } from "@/data/booking";
import { BRANCHES, BRANCH_KEYS, isBranchKey, otherBranch, telHref } from "@/data/branches";
import { site } from "@/data/site";
import { useToast } from "./Toast";

/** yyyy-mm-dd in the visitor's local time zone (what <input type="date"> expects). */
function localISODate(d: Date): string {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

export default function BookingForm() {
  const { branchKey, branch, setBranch, therapy, setTherapy } = useBranch();
  const toast = useToast();
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const other = BRANCHES[otherBranch(branchKey)];

  // The page is built ahead of time, so "today" must be read in the browser.
  useEffect(() => {
    const input = dateRef.current;
    if (!input) return;
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    input.min = localISODate(today);
    if (!input.value) input.value = localISODate(tomorrow);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "");

    const name = field("name").trim();
    const phone = field("phone").replace(/\D/g, "");
    if (!name) {
      setError("Add your name so we know who to expect.");
      nameRef.current?.focus();
      return;
    }
    if (phone.length < 10) {
      setError("Enter a 10-digit mobile number so we can confirm your booking.");
      phoneRef.current?.focus();
      return;
    }
    if (!field("date")) {
      setError("Pick a date for your visit.");
      return;
    }
    setError("");

    const locKey = field("loc");
    const loc = isBranchKey(locKey) ? BRANCHES[locKey] : branch;
    const dur = field("dur");
    const note = field("note").trim();
    const dt = new Date(`${field("date")}T00:00`).toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    const msg =
      `Hello Sattva, I'd like to book:\n• ${field("therapy")}${dur ? `, ${dur} min` : ""}\n• ${dt}, ${field("time")}\n• Branch: ${loc.short}\nName: ${name}\nPhone: ${phone}` +
      (note ? `\nNote: ${note}` : "");

    // A real anchor click, so WhatsApp opens in a new tab like the reference.
    const a = document.createElement("a");
    a.href = `https://wa.me/${loc.whatsapp}?text=${encodeURIComponent(msg)}`;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    toast("Opening WhatsApp with your request");
  }

  return (
    <section className="visit band" id="book">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Book &amp; visit</div>
            <h2>Reserve your session</h2>
          </div>
          <p>
            Fill in your preferences and we&apos;ll open WhatsApp with your request ready to send.
            We confirm every booking personally.
          </p>
        </div>
        <div className="grid">
          <form className="form" id="bookForm" noValidate onSubmit={onSubmit}>
            <div className="row">
              <label htmlFor="f-name">
                Your name
                <input
                  id="f-name"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Ananya Sharma"
                  required
                  ref={nameRef}
                />
              </label>
              <label htmlFor="f-phone">
                Phone
                <input
                  id="f-phone"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="10-digit mobile"
                  required
                  ref={phoneRef}
                />
              </label>
            </div>
            <label htmlFor="f-therapy">
              Therapy
              <select
                id="f-therapy"
                name="therapy"
                value={therapy}
                onChange={(e) => setTherapy(e.target.value)}
              >
                {BOOKING_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <div className="row">
              <label htmlFor="f-dur">
                Duration
                <select id="f-dur" name="dur" defaultValue="">
                  {DURATIONS.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="f-loc">
                Branch
                <select
                  id="f-loc"
                  name="loc"
                  value={branchKey}
                  onChange={(e) => {
                    if (isBranchKey(e.target.value)) setBranch(e.target.value);
                  }}
                >
                  {BRANCH_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {BRANCHES[key].short}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="row">
              <label htmlFor="f-date">
                Date
                <input id="f-date" name="date" type="date" required ref={dateRef} />
              </label>
              <label htmlFor="f-time">
                Preferred time
                <select id="f-time" name="time" defaultValue={DEFAULT_TIME_SLOT}>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot}>{slot}</option>
                  ))}
                </select>
              </label>
            </div>
            <label htmlFor="f-note">
              Anything we should know? (optional)
              <textarea
                id="f-note"
                name="note"
                rows={2}
                placeholder="Pressure preference, injuries, pregnancy…"
              />
            </label>
            <p className="err" id="err" hidden={!error}>
              {error}
            </p>
            <button className="btn btn-primary" type="submit">
              Send request on WhatsApp
            </button>
            <p className="hint">
              Your request goes to the <b data-b="short">{branch.short}</b> team on WhatsApp.
              Prefer to call? Use the number alongside.
            </p>
          </form>

          <div className="places">
            <div className="place">
              <span className="tag">You&apos;re booking at</span>
              <h3 data-b="name">{branch.name}</h3>
              <address data-b="addr">
                {branch.addressLines[0]}
                <br />
                {branch.addressLines[1]}
              </address>
              <div className="line">
                <span className="phone" data-b="phone">
                  {branch.phone}
                </span>
                <a className="mini" href={telHref(branch)} title={`Call ${branch.short}: ${branch.phone}`}>
                  Call Now
                </a>
                <a className="mini" data-b-map="" href={branch.map} target="_blank" rel="noopener">
                  Directions
                </a>
              </div>
              <button
                className="swap"
                type="button"
                data-swap=""
                onClick={() => setBranch(other.key)}
              >
                Switch to <span data-b="other">{other.short}</span>
              </button>
            </div>
            <div className="place">
              <h3>Opening hours</h3>
              <dl className="hours">
                <dt>Both branches</dt>
                <dd>{site.hours}</dd>
                <dt>Last booking</dt>
                <dd>{site.lastBooking}</dd>
              </dl>
            </div>
            <div className="place">
              <h3>Same menu, both branches</h3>
              <p className="hint">
                Every therapy, couples&apos; ritual and package on this page is available at Sector
                83 and Sector 64 at the same price. Packages can be used at either branch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
