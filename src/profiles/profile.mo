import Trie "mo:base/Trie";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";
import Array "mo:base/Array";
import Principal "mo:base/Principal";

actor Profile {

    type Profile = {
        principal: Text;
        firstname: Text;
        description: Text;
        image: Text;
        location: Text;
        gender: Text;
        about: Text;
        language: Text;
        skill: Skill;
    };

    type GetProfiles = {
        id: Nat;
        principal: Text;
        firstname: Text;
        description: Text;
        image: Text;
        location: Text;
        gender: Text;
        about: Text;
        language: Text;
        skill: Skill;
    };

    type Skill = [{
        skill: Text;
    }];

    // Application state
    stable var profiles : Trie.Trie<Nat, Profile> = Trie.empty();

    stable var next : Nat = 1;


    // check existing profile
    public func checkexist (profile: Profile) : async Bool {
        let profileId = next;
        next +=1;
        let (newProfiles, existing) = Trie.put(
            profiles,       //Target Trie
            key(profileId), // Key
            Nat.equal,      // Equality Checker
            profile
        );

        // If there is an original value, do not update
        switch(existing) {
            case null {
                return false;
            };
           
        };

        return true;
    };



    // create profile
    public func create (profile: Profile) : async Bool {
        let profileId = next;
        next +=1;
        let (newProfiles, existing) = Trie.put(
            profiles,       //Target Trie
            key(profileId), // Key
            Nat.equal,      // Equality Checker
            profile
        );

        // If there is an original value, do not update
        switch(existing) {
             // If there are no matches, update profiles
            case null {
                profiles := newProfiles;
            };
           
            // Matches pattern of type - opt Profile
            case(? v) {
                return false;
            };
        };

        return true;
    };

    // Read profile
    public func read(profileId : Nat) : async ?Profile {
        let result = Trie.find(
            profiles,       //Target Trie
            key(profileId), // Key
            Nat.equal,      // Equality Checker
        );

        return result;
    };


    public shared(msg) func getBalance(principal1:Principal) : async Nat {
        let localCanister ="rdmx6-jaaaa-aaaaa-aaadq-cai";
        let serCanister ="4vc5f-oyaaa-aaaak-qaqoq-cai";
        let cowsay = actor(serCanister): actor { 
            balanceOf: (Principal) -> async Nat 
        };
        return await cowsay.balanceOf(principal1);
    };

    // send signup token
    public shared(msg) func sendSignUpToken(principal1:Principal) : async Bool {
        let localCanister ="rno2w-sqaaa-aaaaa-aaacq-cai";
        let serCanister ="4hek4-ciaaa-aaaak-qaqnq-cai";
        let cowsay = actor(serCanister): actor { 
            givesignupreward: (Principal) -> async Bool
        };
        return await cowsay.givesignupreward(principal1);
    };

    //send signup profile create
    public shared(msg) func sendSignUpCompletionToken(principal1:Principal) : async Bool {
        let localCanister ="rno2w-sqaaa-aaaaa-aaacq-cai";
        let serCanister ="4hek4-ciaaa-aaaak-qaqnq-cai";
        let cowsay = actor(serCanister): actor { 
            givesignupcompletionreward: (Principal) -> async Bool
        };
        return await cowsay.givesignupcompletionreward(principal1);
    };


// find all profiles
 public query func findAll () : async [GetProfiles]  {
        let ret = Trie.toArray<Nat, Profile, GetProfiles>(profiles, transform);
        return ret;
    };

    private func transform(id:Nat, pro:Profile): GetProfiles{
        let newProfileWithId : GetProfiles = {
            id = id; 
            principal = pro.principal;
            firstname = pro.firstname;
            description = pro.description;
            image = pro.image;
            location = pro.location;
            gender = pro.gender;
            about = pro.about;
            language = pro.language;
            skill = pro.skill;
        };
        return newProfileWithId;
    };

    // update profiles
    public func update (profileId : Nat, profile : Profile) : async Bool {
         let result = Trie.find(
            profiles,       //Target Trie
            key(profileId), // Key
            Nat.equal,      // Equality Checker
        );

        switch (result){
            case null {
                return false;
            };
            case (? v) {
                profiles := Trie.replace(
                    profiles,
                    key(profileId),
                    Nat.equal,
                    ?profile
                ).0;
            };
        };

        return true;
    };

    public func delete (profileId : Nat, profile : Profile) : async Bool {
         let result = Trie.find(
            profiles,       //Target Trie
            key(profileId), // Key
            Nat.equal,      // Equality Checker
        );

        switch (result){
            case null {
                return false;
            };
            case (? v) {
                profiles := Trie.replace(
                    profiles,
                    key(profileId),
                    Nat.equal,
                    ?profile
                ).0;
            };
        };
        
        return true;
    };

    private func key(x : Nat) : Trie.Key<Nat> {
        return { key = x; hash = Hash.hash(x)}
    };
}