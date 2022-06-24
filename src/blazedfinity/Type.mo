module {
  public type Id = Nat;
  public type Title = Text;
  public type Position = Text;
  public type Description = Text;

  public type Jobs = {
    jobTitle : Title; // the name need not be unique
    jobPosition: Position;
    jobDescription : Description; // (arbitrarily complex entity data
  };
}