# Jorge Joshua Neyra Caldas — Portfolio

Updated from Jorge’s supplied resume while preserving the sample’s pages, layouts, styling, and animation components.

## Run on Windows

1. Open a terminal in this folder.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Build

Run `npm run build`. Run `npm start` after building to launch the production server. A server is required for the contact form; use Vercel or another Next.js Node hosting service. GitHub Pages does not support the email backend.

## Personalization

- Contact and site URL: `src/lib/constants.ts`
- Work history: `src/data/experience.ts`
- Projects derived from resume work: `src/data/projects.ts`
- Education and leadership: `src/data/achievements.ts`
- Downloadable resume: `public/resume/resume.pdf`
- Avatar: `public/me/jorge-initials.png` (initials; replace with Jorge’s photo if desired)

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real deployed URL. GitHub/LinkedIn/Telegram links were omitted because the resume does not supply them. Project illustrations are title cards, not screenshots of proprietary software. No extra metrics or certifications were added.


Includes a persistent dark/light mode toggle and automatic, continuously looping core skills rows. The navigation displays Jorge’s full name.

## Enable Gmail delivery

The composer is implemented, but no email account credentials are included.

1. Sign in to the Gmail account that will send the messages. Enable Google 2-Step Verification.
2. Create an app password at https://myaccount.google.com/apppasswords. Google guidance: https://support.google.com/accounts/answer/185833.
3. Copy `.env.example` to `.env.local`. Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` using that account and its app password. Use an app password, not the regular Gmail password.
4. Restart `npm run dev`. For Vercel, set these server environment variables in the project settings and redeploy.
5. Open the email icon, fill the composer, and send a test. Messages always go to `jorge.joshua0124@gmail.com`. The visitor email is Reply-To.

Actual delivery needs valid Gmail credentials and an SMTP connection. Success means Gmail accepted the message; inbox placement depends on Gmail filtering. The local rate limiter is a basic single-process safeguard; use shared rate limiting/CAPTCHA when opening a high-traffic public form.

Skill icons now render locally from the bundled icon libraries. AI concepts use descriptive symbols. The theme toggle waits for hydration before reading the saved theme; particle positions use a repeatable seed. If direct sending is unavailable, the composer offers “Open this draft in Gmail”; the visitor must send that draft from their Gmail account.

### Animated backgrounds

A shared fixed background spans all pages: drifting stars and particles in dark mode, and gentle layered waves over a pale sky-blue palette in light mode. The scene stays behind the content while scrolling. Reduced-motion preferences pause decorative motion.

### Entrance animation

The portfolio opens with a theme-aware JN loading screen, orbiting rings, particles, and light-mode waves. It waits for the page and fonts with a bounded wait, then fades into the content. Reduced-motion preferences use a short static entrance. The loader runs on page loads, not internal navigation.

## Eye loader and JN signature update

The entrance now lasts at least 3 seconds plus a 650 ms fade (previously 1.8 seconds), while still waiting for page assets with a bounded timeout. Reduced-motion users retain the short, static entrance. A blinking, gently looking eye and an original italic SVG JN monogram appear in the loader; the monogram also appears in the navigation.

The supplied hydration report contains attributes injected by a browser extension (`bis_skin_checked`, `bis_register`, and `__processed_*__`). A short-lived pre-hydration guard removes only those known attributes and disconnects when the app mounts. It does not suppress React warnings or alter normal app attributes. Extensions that continue modifying the page can still cause errors: disable the extension with ID `pphgdbgldlmicfdkhondlafkiomnelnk` for localhost/the portfolio, then reload. The earlier `M_ID` error originates inside that extension and cannot be repaired by portfolio code. Test in a browser profile without that extension.

## Career page

Navigation now points to `/career`, which includes work history followed by Education: Bachelor’s Degree in Computer Science, Technological University of Peru, 2014–2018, Lima, Peru. Previous `/experience` links redirect permanently to `/career`. The downloadable resume matches the supplied resume.
