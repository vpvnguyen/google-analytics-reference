export const createGoogleTag = () => {
  const args = {
    prop: "value",
  };

  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VP1QPXRLXH"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(${args});
      }
      gtag("js", new Date());

      gtag("config", "G-VP1QPXRLXH", {
        origin: "firebase",
        update: true,
        firebase_id: "dj8juo2UjAekvByFB1JxJp"
      })
      `}
      </script>
    </>
  );
};
