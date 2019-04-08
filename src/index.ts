import $ from "scriptjs";

declare global {
  interface Window {
    agastya: any;
  }
}

const doAction = (action: string, ...params: any) =>
  new Promise((resolve, reject) => {
    if (window.agastya && window.agastya.ready) {
      if (typeof window.agastya[action] === "function") {
        return resolve(window.agastya[action](...params));
      } else {
        return reject();
      }
    }
    const interval = window.setInterval(() => {
      if (window.agastya && window.agastya.ready) {
        window.clearInterval(interval);
        if (typeof window.agastya[action] === "function") {
          return resolve(window.agastya[action](...params));
        } else {
          return reject();
        }
      }
    }, 100);
  });

export default class Agastya {
  constructor(apiKey: string, channel: string = "production") {
    let url = `https://platform.oswaldlabs.com/_/${apiKey}.js`;
    if (channel === "development" || channel === "dev")
      url = `https://platform.oswaldlabs.com/_/development/${apiKey}.js`;
    if (channel === "acceptance" || channel === "beta")
      url = `https://platform.oswaldlabs.com/_/acceptance/${apiKey}.js`;
    $(url, () => {});
  }
  open(page?: string) {
    return doAction("open", page);
  }
  close() {
    return doAction("close");
  }
  toggle() {
    return doAction("toggle");
  }
  navigate(page: string) {
    return doAction("navigate", page);
  }
  unappend() {
    return doAction("unappend");
  }
  on(event: string, listener: Function) {
    return doAction("on", event, listener);
  }
  off(event: string) {
    return doAction("off", event);
  }
  $emit(event: string, data: any) {
    return doAction("$emit", event, data);
  }
  secureTrack(data: any) {
    return doAction("secureTrack", data);
  }
  getDetails() {
    return doAction("getDetails");
  }
  getUserInfo() {
    return doAction("getUserInfo");
  }
  api(action: string, slug: any) {
    return doAction("api", action, slug);
  }
  stopIntegration(integration: string) {
    return doAction("stopIntegration", integration);
  }
  updateIntegration(integration: string) {
    return doAction("updateIntegration", integration);
  }
}

(<any>window).AgastyaModule = Agastya;
