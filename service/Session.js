const sessionIdToUserMap = new Map();

function getSession(sessionId) {
  console.log('sessionIdToUserMap', sessionIdToUserMap);
  return sessionIdToUserMap.get(sessionId);
}

function setSession(sessionId, value) {
  console.log('set sessionIdToUserMap', sessionId, value);
  sessionIdToUserMap.set(sessionId, value);
  console.log('sessionIdToUserMap', sessionIdToUserMap.size);
}

module.exports = { getSession, setSession };
