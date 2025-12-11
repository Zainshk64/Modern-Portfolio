"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `When young people are given clarity, mentorship, and belief, they don’t just grow they transform. Innovation begins the moment you realize the world moves for those bold enough to build it.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
