chrome.proxy.settings.set({
  value: {
    mode: 'pac_script',
    pacScript: {
      data: 'function FindProxyForURL(u,h){return h==="usher.ttvnw.net"?"PROXY proxy.moddychat.com:8888":"DIRECT"}'
    }
  },
  scope: 'regular'
});
