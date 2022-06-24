import * as blazedefinity from "../../../declarations/blazedfinity";
import * as profile from "../../../declarations/profile"; 
import * as profiles  from "./../../../declarations/profiles";
import * as jobs  from "./../../../declarations/jobs";
import { Ed25519KeyIdentity } from "@dfinity/identity";

import {
  Actor,
  ActorConfig,
  HttpAgent,
  HttpAgentOptions,
  Identity,
} from "@dfinity/agent";

export const createActor = async (
  canisterId,
  options,
  idlFactory
) => {
  const agent = new HttpAgent({ ...options.agentOptions });
  // Fetch root key for certificate validation during development

  if (process.env.NODE_ENV !== "production") {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return await Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions,
  });
};

const _createActors =  async (options) => {   
  return {
    blazedefinity: await createActor(
      process.env.blazedefinity_canisterId,
      options,
      blazedefinity.idlFactory
    ),
    profile: await createActor(
      process.env.profile_canisterId,
      options,
      profile.idlFactory
    ),
    profiles: await createActor(
      process.env.profiles_canisterId,
      options,
      profiles.idlFactory
    ),
    jobs: await createActor(
      process.env.jobs_canisterId,
      options,
      jobs.idlFactory
    )
  };
}

export const createActors =  async (identity) => {
  return await _createActors({
    agentOptions: {
      host: process.env.host,
      identity,
    },
  });
}

export const get_actors_details = async()=>{

  const myethaccount = await window.ethereum.selectedAddress;
  const fet_details = localStorage.getItem(`ic_key_${myethaccount}`);
  const identityValue = Ed25519KeyIdentity.fromJSON(fet_details);
  const actors = await createActors(identityValue);

  return actors;
}

export const createAnonymousActors = async () => {
  return _createActors({
    agentOptions: {
      host: process.env.host,
    },
  });
}
