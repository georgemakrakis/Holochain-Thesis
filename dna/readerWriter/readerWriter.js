'use strict';

// creates a holoText entry
function holoTextWrite(text) {
    var hash = commit('holoText', text);

    // On the DHT, put a link from my hash to the hash of the new post
    var base = commit("holoText_anchor", "holoText_anchor");
    commit("holoText_link",{
        Links:[
            {Base:base, Link: hash, Tag: "holoText"}
        ]
    });

    return hash;
}

// retrieves a holoText entry
function holoTextRead(hash) {
    return get(hash);
}

function getAllTexts () {
    var base = commit("holoText_anchor", "holoText_anchor");
    var links = [];
    try
    {
        links = getLinks(base, 'holoText', { Load: true });
    }
    catch (error)
    {
        links.add(error);
    }

    return links;
}

function genesis() {
  return true;
}

function validateCommit(entryName, entry, header, pkg, sources) {
    switch (entryName)
    {
        case 'holoText':
            // in order for the 'commit' action to work, validateCommit (given a intent) must return true
            // there is no special validation that we have to perform for our simple app
            return true;
        case 'holoText_anchor':
            // in order for the 'commit' action to work, validateCommit (given a intents_anchor) must return true
            // there is no special validation that we have to perform for our simple app
            return true;
        case 'holoText_link':
            // in order for the 'commit' action to work, validateCommit (given a intent_link) must return true
            // there is no special validation that we have to perform for our simple app
            return true;
        default:
            // invalid entry name
            return false;
    }
}

function validatePut() {
    return true
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateLink(linkEntryType,baseHash,links,pkg,sources) {
    if (linkEntryType=="holoText_link")
    {
        return true;
    }

    return false;
}

function validatePutPkg (entryName) {
  return null;
}

function validateModPkg (entryName) {
  return null;
}

function validateDelPkg (entryName) {
  return null;
}

function validateLinkPkg (entryName) {
  return null;
}
