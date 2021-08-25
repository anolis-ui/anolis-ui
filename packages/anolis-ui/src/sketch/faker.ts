import { useMemo } from "react";
import faker from "faker";

export const useParagraphs = (paragraphCount: number = 1, sentenceCount?: number) => {
  return useMemo(() => [...Array(paragraphCount)].map(() => faker.lorem.paragraph(sentenceCount)), [paragraphCount, sentenceCount]);
};

export const useParagraph = (sentenceCount?: number) => {
  return useMemo(() => faker.lorem.paragraph(sentenceCount), [sentenceCount]);
};

export const useFaker = <T>(func: ((f: Faker.FakerStatic) => T)): T => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => func(faker), []);
};
