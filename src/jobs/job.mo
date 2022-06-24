import Trie "mo:base/Trie";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";
import Array "mo:base/Array";
import Principal "mo:base/Principal"

actor Job {

    type Job = {
        principal: Text;
        title: Text;
        description: Text;
        status: Text;
        location: Text;
        annualSalary: Text;
        companyType: Text;
        feeStakeTxn: Text;
    };

    type GetJobs = {
        id: Nat;
        principal: Text;
        title: Text;
        description: Text;
        status: Text;
        location: Text;
        annualSalary: Text;
        companyType: Text;
        feeStakeTxn: Text;
    };

    // Application state
    stable var jobs : Trie.Trie<Nat, Job> = Trie.empty();

    stable var next : Nat = 1;

    // Create a job
    public func create (job: Job) : async Bool {
        let jobId = next;
        next +=1;
        let (newJobs, existing) = Trie.put(
            jobs,       // Target trie
            key(jobId), // Key
            Nat.equal,  // Equality checker
            job
        );

        // If there is an original value, do not update
        switch(existing) {
            // If there are no matches, update job
            case null {
                jobs := newJobs;
            };
            // Matches pattern of type - opt job
            case(? v) {
                return false;
            };
        };

        return true;
    };

    // Read job
    public func read(jobId : Nat) : async ?Job {
        let result = Trie.find(
            jobs,       // Target trie
            key(jobId), // Key
            Nat.equal,  // Equality checker
        );

        return result;
    };

// find all jobs list
 public query func findAll () : async [GetJobs]  {
        let ret = Trie.toArray<Nat, Job, GetJobs>(jobs, transform);
        return ret;
    };

    private func transform(id:Nat, jb:Job): GetJobs{
        let newJobWithId : GetJobs = {
            id = id; 
            principal = jb.principal;
            title = jb.title;
            description = jb.description;
            status = jb.status;
            location = jb.location;
            annualSalary = jb.annualSalary;
            companyType = jb.companyType;
            feeStakeTxn = jb.feeStakeTxn;
        };
        return newJobWithId;
    };

    //update job
    public func update (jobId : Nat, job : Job) : async Bool {
         let result = Trie.find(
            jobs,       // Target trie
            key(jobId), // Key
            Nat.equal,  // Equality checker
        );

        switch (result){
            case null {
                return false;
            };
            case (? v) {
                jobs := Trie.replace(
                    jobs,
                    key(jobId),
                    Nat.equal,
                    ?job
                ).0;
            };
        };

        return true;
    };

    // delete job
    public func delete (jobId : Nat) : async Bool {
         let result = Trie.find(
           jobs,       // Target trie
           key(jobId), // Key
            Nat.equal,  // Equality checker
        );

        switch (result){
            case null {
                return false;
            };
            case (? v) {
                jobs := Trie.replace(
                    jobs,
                    key(jobId),
                    Nat.equal,
                    null
                ).0;
            };
        };
        
        return true;
    };

    private func key(x : Nat) : Trie.Key<Nat> {
        return { key = x; hash = Hash.hash(x)}
    };
}