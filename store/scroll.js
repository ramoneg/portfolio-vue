export const state = () => ({
  percent: 0
});

export const actions = {
  calculatePercent({ commit }) {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    var percent =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
      
    commit("setPercent", Math.round(percent));
  }
};

export const mutations = {
  setPercent: (state, percent) => (state.percent = percent)
};
