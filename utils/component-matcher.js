import Stats from "../components/stats";

function ComponentMatcher(data) {
  switch (data.__typename) {
    case "PageBodyStats":
      return Stats;
  }
}

export default ComponentMatcher;
