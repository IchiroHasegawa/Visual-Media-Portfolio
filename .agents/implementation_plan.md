# Fix Project Thumbnail and Media-Viewing Behaviour

This plan addresses all requested changes regarding media behaviour, data model expansion, image lightboxes, video auto-focus, and the broken thumbnail issue.

## User Review Required
Please review the proposed data model and component structure below. No visual design changes will be made.

## Open Questions
- Next.js typically handles hash routing (e.g., `#project-media`) automatically on page load. However, to ensure smooth auto-scrolling with the fixed header, I will add a client-side `useEffect` scroll handler in the project details page and appropriate `scroll-margin-top`. Let me know if you have a preferred offset for the header.

## Proposed Changes

### 1. Data Model (`src/data/portfolioData.ts`)
- **[MODIFY]** Define `ProjectMediaType = "image" | "video"`.
- **[MODIFY]** Update `ProjectData` interface to include `mediaType`, `posterImage?`, `fullImage?`, and `galleryImages?`.
- **[MODIFY]** Update the existing project items:
  - `tech-explainer` and `doc-short` will have `mediaType: "video"`.
  - `type-poster` and `sustainable-campaign` will have `mediaType: "image"`.
  - Use `thumbnail` as fallback for `posterImage` and `fullImage`.
  - Fix the `thumbnail` paths to ensure they match exact casing (e.g., `/images/image1.png`).

### 2. Global Lightbox & Interaction Wrapper (`src/components/ui/Lightbox.tsx`, `src/components/work/ProjectCardInteraction.tsx`)
- **[NEW]** `Lightbox.tsx`: A semantic modal (`role="dialog"`) that renders the `fullImage` (fallback to `thumbnail`) constrained by `max-width` and `max-height` (92vw, 86vh). Closes on Escape, backdrop click, or close button.
- **[NEW]** `ProjectCardInteraction.tsx`: A wrapper component that receives the project object.
  - If `mediaType === "video"`, wraps children in `<Link href="/work/[slug]#project-media">`.
  - If `mediaType === "image"`, wraps children in a clickable `div` that opens the Lightbox.

### 3. Home & Work Pages (`src/app/page.tsx`, `src/app/work/page.tsx`)
- **[MODIFY]** Wrap the existing project card markup (for both featured projects on Home and grid projects on Work) with `<ProjectCardInteraction project={project}>`.
- **[MODIFY]** Ensure the `Image` parent containers have `position: relative` or `absolute` and correct dimensions so Next.js `Image` with `fill` works perfectly, resolving the broken thumbnail issue caused by CSS positioning conflicts.

### 4. Video Player & Project Details (`src/components/ProjectVideo.tsx`, `src/app/work/[slug]/page.tsx`)
- **[MODIFY]** `src/app/work/[slug]/page.tsx`: Wrap the video component in `<section id="project-media" className="scroll-mt-32">`. Add a small client-side script to smoothly scroll into view on load if the hash is present.
- **[MODIFY]** `src/components/ProjectVideo.tsx`: 
  - Update props to accept `posterImage` and fallback to `thumbnail`.
  - Ensure the initial state strictly renders the poster image with `object-fit: cover` and the play button, completely avoiding any black screen or premature loading spinner.
  - When Play is clicked, swap the poster out for the embedded iframe or HTML5 video without layout jumps.

## Verification Plan
1. **Thumbnail Test**: Verify Next.js `Image` configuration in the card components. The path `/images/image1.png` will perfectly map to `public/images/image1.png` as long as casing matches exactly on your OS.
2. **Image Project Test**: Clicking an image project on Home or Work pages will open the Lightbox. Background scrolling will be locked.
3. **Video Project Test**: Clicking a video project navigates to the project page and auto-scrolls to the media section. The player shows the poster image immediately, loading the video only on interaction.
4. **Build Test**: Run `npm run build` to ensure no TypeScript or Next.js errors exist.
