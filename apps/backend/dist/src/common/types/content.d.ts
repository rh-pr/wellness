export declare enum ContentType {
    QUOTE = "QUOTE",
    MUSIC = "MUSIC",
    BOOK = "BOOK",
    MOVIE = "MOVIE",
    HISTORICAL_FACT = "HISTORICAL_FACT",
    SCIENTIFIC_FACT = "SCIENTIFIC_FACT"
}
export type GeneratedContentPayload = {
    type: ContentType.QUOTE;
    text: string;
    author: string;
} | {
    type: ContentType.MUSIC;
    title: string;
    artist: string;
    durationSec: number;
    url: string;
} | {
    type: ContentType.BOOK;
    title: string;
    author: string;
    description: string;
} | {
    type: ContentType.MOVIE;
    title: string;
    director: string;
    year: number;
} | {
    type: ContentType.HISTORICAL_FACT;
    title: string;
    date: string;
    description: string;
} | {
    type: ContentType.SCIENTIFIC_FACT;
    title: string;
    field: string;
    description: string;
};
