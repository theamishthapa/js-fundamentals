let user = [
  {
    name: "amish",
    location: {
      country: "nepal",
      city: "ktm",
    },
  },
  {
    name: "kapil",
  },
  {
    name: "rijan",
    location: {
      country: "china",
      city: "tmk",
    },
  },
];

user.map((value, index) => {
  console.log(value.location?.city);
});
