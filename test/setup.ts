import { configure } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import snapshot from "chai-jest-snapshot";

configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());
chai.use(snapshot);
