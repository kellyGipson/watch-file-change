export type WatcherConfig = {
  readonly intervalMs: number;
  readonly howToWriteFile: (fileContents: string) => string;
  readonly readFilePath: string;
  readonly writeFilePath: string;
  readonly howToCheckFile: (oldCheck: string, fileContents: string) => boolean;
};
