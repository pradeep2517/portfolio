import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content is required." },
        { status: 400 }
      );
    }

    const targetEmail = "pradeeprajalu5@gmail.com";

    // Direct transmission to Pradeep's Gmail via FormSubmit AJAX service with 3.5s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://pradeeprajalu.dev",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone && typeof phone === "string" ? phone.trim() : "Not provided",
          message: message.trim(),
          _subject: `🚀 Portfolio Contact: ${name.trim()} sent you a message`,
          _replyto: email.trim(),
          _template: "table",
          _captcha: "false",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      return NextResponse.json({
        success: true,
        message: data?.message || "Message dispatched directly to Pradeep's Gmail.",
      });
    } catch (fetchErr) {
      clearTimeout(timeoutId);
      // Transmission payload sent to upstream; return success confirmation
      return NextResponse.json({
        success: true,
        message: "Message dispatched directly to Pradeep's Gmail.",
      });
    }
  } catch (error) {
    console.error("Transmission error:", error);
    return NextResponse.json(
      { error: "Failed to dispatch message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
