// export const DATA = [
//   {
//     id: 1,
//     uri:
//       "https://www.theindianwire.com/wp-content/uploads/2019/12/red-dead-redemption-2-xbox-one-4k-1-scaled.jpg",
//     title: "Aditya Pahilwani",
//   },
//   {
//     id: 2,
//     uri:
//       "https://cutewallpaper.org/21/arthur-morgan-wallpapers/Arthur-Morgan-Wallpapers-Wallpaper-Cave.jpg",
//     title: "Arthur Morgan",
//   },
//   {
//     id: 3,
//     uri:
//       "https://pixelz.cc/wp-content/uploads/edd/2018/08/shadow-of-the-tomb-raider-lara-croft-e3-uhd-4k-wallpaper.jpg",
//     title: "Lara Croft",
//   },
// ];

const images = [
  {
    uri:
      "https://cutewallpaper.org/21/arthur-morgan-wallpapers/Arthur-Morgan-Wallpapers-Wallpaper-Cave.jpg",
    title: "Aditya Pahilwani",
  },
  {
    uri:
      "https://www.theindianwire.com/wp-content/uploads/2019/12/red-dead-redemption-2-xbox-one-4k-1-scaled.jpg",
    title: "Arthur Morgan",
  },
  {
    uri:
      "https://cdn.wccftech.com/wp-content/uploads/2020/02/49517766152_7ab6037ac1_k.jpg",
    title: "Ellie",
  },
  {
    uri:
      "https://pixelz.cc/wp-content/uploads/edd/2018/08/shadow-of-the-tomb-raider-lara-croft-e3-uhd-4k-wallpaper.jpg",
    title: "Lara croft",
  },
  {
    uri:
      "https://i.pinimg.com/564x/54/28/fa/5428faa764350002a9f54e469ed8385e.jpg",
    title: "Kratos",
  },
];
export const data = images.map((data, index) => ({
  key: String(index + 1),
  image: data.uri,
  title: data.title,
  avatar_url: `https://randomuser.me/api/portraits/men/${Math.floor(
    Math.random() * 49
  )}.jpg`,
}));
