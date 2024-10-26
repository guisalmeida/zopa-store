<p align="center">
  <a href="https://zopa-clothing.netlify.app/" target="_blank">
    <img alt="Logo" src="src/assets/logo-zopa-helm.svg" width="200" />
  </a>
</p>

<h1 align="center">
  <code>Zopa Store</code>
</h1>

<p align="center">
  <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img alt="Redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
  <img alt="Stripe" src="https://img.shields.io/badge/Stripe-5469d4?style=for-the-badge&logo=stripe&logoColor=ffffff" />
  <img alt="Material UI" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />
  <img alt="Styled Components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</p>

<p align="center">
  <a style="display: block;" href="https://app.netlify.com/sites/guisalmeida/deploys" target="_blank">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/0dadb4f6-02ad-4347-983a-a0a8e77c468b/deploy-status" />
  </a>
</p>

## Start  
To run this project properly you will need also to configure a backend environment. So after configuring this project go to [Zopa Store Api](https://github.com/guisalmeida/zopa-store-api) project and follow the steps there too.  

> Please make sure to configure the environment variables as well, take a look at `.env.example`, and create a file `.env` in your root.

```
git clone git@github.com:GuiSAlmeida/zopa-store.git
cd zopa-store
npm install

# up server at http://localhost:5173/
npm run dev
```

## 🚀 Technologies

- [React reselect](https://github.com/reduxjs/reselect#installation)
- [Redux Persist](https://github.com/rt2zz/redux-persist#basic-usage)
- [Redux-thunk](https://github.com/reduxjs/redux-thunk)
- [Redux-saga](https://redux-saga.js.org/)
- [Stripe](https://github.com/stripe/react-stripe-js)
- [Recharts](https://recharts.org/)


## ⚙️ Todo / Issues / Upcoming features

- [x] Feat: Private route admin;
- [x] Feat: Create a sold-out feat product page;
- [x] Fix: form select default value;
- [x] Feat: Finish user list admin crud;
- [ ] Fix: local storage get token;
- [ ] Fix(admin product page): Register sizes;
- [ ] Refactor: remove all TS-ignore;
- [ ] Feat: Create user auth validation when already logged in;
- [ ] Feat: Create stock quantity and manage with each size;
- [ ] Feat: Improve admin page mobile;
- [ ] Feat: Improve user details page;
- [ ] Test: e2e and accessibility with POM (page object model) pattern;



## References

- [Styled components + TS](https://styled-components.com/docs/api#typescript)
- [Styled components + TS guide](https://www.atatus.com/blog/guide-to-typescript-and-styled-components/)
- [React + TS cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs)
