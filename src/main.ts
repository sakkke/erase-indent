export class Main {
  string: string

  constructor (string: string) {
    this.string = string
  }

  public erase (): void {
    if (this.hasErased) {
      this.splited = this.splited.map(string => (
        string[0] === undefined
          ? ''
          : string.slice(1)
      ))
      this.erase()
    }
  }

  get hasErased (): boolean {
    const noUndefinedStrings = this.splited
      .filter(string => string !== undefined)
    const result = noUndefinedStrings
      .filter(string => (
        string[0] === ' ' ||
        string[0] === undefined
      )).length === noUndefinedStrings.length
    return result
  }

  get splited (): string[] {
    const result = this.string.split('\n')
    return result
  }

  set splited (splited) {
    this.string = splited.join('\n')
  }
}
