import * as KeycloakMock from "../lib";

const setupBefore = async () => {
  const instance = await KeycloakMock.createMockInstance({
    authServerURL: "http://localhost/auth",
    realm: "myrealm",
    clientID: "test",
  });

  KeycloakMock.activateMock(instance);

  instance.database.createUser({
    sub: "4255c2ae-3f11-4a26-a401-3981c8845df3",
    name: "Henk Jansen",
    email: "henk@gmail.com",
  });
};

const teardownAfter = () => {
  const mock = KeycloakMock.getMock("http://localhost/auth");
  KeycloakMock.deactivateMock(mock);
};

const getMockInstance = () => {
  const instance = KeycloakMock.getMockInstance("http://localhost/auth");
  return instance;
};

export { setupBefore, teardownAfter, getMockInstance };
