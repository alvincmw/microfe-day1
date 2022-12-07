export const listenerCreator = (ref, callback) => {
    ref.onmessage = ev => ev.data?.type === "child" && callback(ev);
};

export const broadcaster = (frame, message) => {
    frame.postMessage(message, "*");
};