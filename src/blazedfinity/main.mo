import Nat "mo:base/Nat";
import Hash "mo:base/Hash";
import Iter "mo:base/Iter";
import Db "./Database";
import Types "./Type";

actor {

 public type Id = Types.Id; // Nat for now (not Text, as in the forum question)
  public type DbRow = Types.Jobs;

  // A database of named entities, each (uniquely) identified by a number
  flexible var db = Db.Database<Id, DbRow>(
    func (_, last) {
      switch last { case null 0; case (?x) x + 1 };
    },
    Nat.equal,
    #hash(Hash.hash),
  );

  /// create an entity, assigning a unique ID
  public func createEntity(t : Text, d : Text, p: Text) : async Id {
    db.create({jobTitle=t; jobDescription=d; jobPosition=p})
  };

  /// get all of the entries in the database thus far
  public func readAll() : async [(Id, DbRow)] {
    Iter.toArray(db.entries())
  };


}