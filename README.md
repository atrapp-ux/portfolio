# Amy Rapp — portfolio hero

The opening frame of Amy Rapp’s UX portfolio: a stack of tilted cards and a separate white intro card. The intro is real text, not part of the illustration.

## Edit the copy

All user-facing strings for this frame live in [`content/home.ts`](content/home.ts). Change the greeting, the highlighted name, or the intro paragraph there. The layout does not need to change with the copy.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Layout

- **Desktop (1024px and up):** the Figma frame at 1280×560, scaled only so it fits narrower desktop windows. The card illustration and the white intro stay in their designed positions.
- **Tablet (768–1023px):** the same hierarchy — illustration behind, intro card overlapping it — with type kept at a readable size.
- **Mobile (under 768px):** the illustration and the intro card remain separate. The card sits on the lower part of the stack.

The body is set in SF Mono when that font is installed, and in IBM Plex Mono otherwise. The greeting uses Google Sans Flex.
