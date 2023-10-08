import { readFileSync, writeFileSync } from 'fs';
import { WatcherConfig } from './watch-config';

export default class Watcher {
  private config: WatcherConfig;
  private oldCheck: string;

  constructor(config: WatcherConfig) {
    this.config = config;
  }

  public watch(): void {
    setInterval(() => {
      const buf = readFileSync(this.config.readFilePath, { encoding: 'utf8' });
      const fileContents = buf.toString();
      if (this.config.howToCheckFile(this.oldCheck, fileContents)) {
        writeFileSync(
          this.config.writeFilePath,
          this.config.howToWriteFile(fileContents)
        );
        this.oldCheck = fileContents;
      }
    }, this.config.intervalMs);
  }
}
