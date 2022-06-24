import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Buffer "mo:base/Buffer";
import TrieMap "mo:base/TrieMap";
import Hash "mo:base/Hash";
import Text "mo:base/Text";

// import profile type defnition
import Types "Types";


actor {

    private stable var next  = 0;
    public type EthAddress = Text;

    type Profile =  Types.Profile;

    public type Map<X, Y> = TrieMap.TrieMap<X, Y>;

    public type State = {
      user : Map<EthAddress, Profile>;
    };

    var  st : State = {
      user = TrieMap.TrieMap<EthAddress, Profile>(Text.equal, Text.hash);
    };

   public shared (msg) func whoami() : async Principal {
        msg.caller
   };

   public query (msg) func whoamis() : async Principal {
        msg.caller
   };

}
