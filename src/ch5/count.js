const text0 = 'abcdefghijklmnopqrstuvwxyz';
const text1 = 'abcdefghijklmnopqrstuvwxyz.ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const text2 = `
Getting Started with Redux#
Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

Installation#
Redux Toolkit#
Redux Toolkit is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.

Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better.

Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:
`;

// 'A' = 65
// 'Z' = 90
// 'a' = 97
// 'z' = 122
// frequency
// { count: 0, fraction: '', decimal: .000, percent: 0.0 },

function countText(text) {
  const total_length = text.length;
  const letters_count = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0,
    g: 0, h: 0, i: 0, j: 0, k: 0, l: 0,
    m: 0, n: 0, o: 0, p: 0, q: 0, r: 0,
    s: 0, t: 0, u: 0, v: 0, w: 0, x: 0,
    y: 0, z: 0,
  };

  const text_lowerCase = text.toLowerCase();
  for (let i = 0; i < text_lowerCase.length; i++) {
    const char = text_lowerCase.charAt(i);
    const charCode = text_lowerCase.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      letters_count[char] += 1;
    }
  }

  const keys = Object.keys(letters_count);
  const frequency = keys.map(key => {
    const count = letters_count[key];
    const decimal = parseFloat((count / total_length).toFixed(2));
    return {
        key,
        count,
        fraction: `${count} / ${total_length}`,
        decimal,
        percent: parseFloat((decimal * 100).toFixed(0)),
    };
  })

  return {
    total_length,
    // letters_count,
    frequency,
  };
}

const result = countText(text2);
console.log(result);
