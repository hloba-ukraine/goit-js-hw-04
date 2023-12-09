const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    profile.username = newName;
  },
  getInfo() {
    return `${profile.username} has ${profile.playTime} active hours!`;
  },
  updatePlayTime(hours) {
    profile.playTime += hours;
  },
};
console.log(profile.getInfo());
profile.changeUsername("Marco");
console.log(profile.getInfo());
profile.updatePlayTime(20);
console.log(profile.getInfo());
