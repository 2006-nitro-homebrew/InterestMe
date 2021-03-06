/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Navbar } from "./Navbar";
export { default as Home } from "./Home";
// export { default as Login } from "./Login";
// export { default as Signup } from "./Login";
export { default as InterestMe } from "./InterestMe";
export { default as Profile } from "./Profile";
export { default as ReadingList } from "./ReadingList";
// export { default as SingleArticle } from "./SingleArticle";
export {Login, Signup} from './Login'
export { default as SingleArticle } from "./SingleArticle";
