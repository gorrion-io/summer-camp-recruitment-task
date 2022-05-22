import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "../components/Card";
import { User } from "../lib/users";

const mockUser: User = {
	fullName: "John Doe",
	username: "John_Doe",
	email: "johndoe@example.com",
	avatar:
		"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/198.jpg",
	address: {
		street: "Testing street",
		city: "Test city",
		zip: "12345",
	},
	phoneNumber: "123456789",
	gender: "Male",
	age: 26,
	images: [
		"http://loremflickr.com/640/480/city?20020",
		"http://loremflickr.com/640/480/city?20020",
		"http://loremflickr.com/640/480/city?20020",
		"http://loremflickr.com/640/480/city?20020",
		"http://loremflickr.com/640/480/city?20020",
	],
};

describe("Card", () => {
	it("renders user info", () => {
		const { getByText } = render(<Card user={mockUser} key="test" />);

		expect(getByText(mockUser.fullName)).toBeInTheDocument();
		expect(getByText(mockUser.email)).toBeInTheDocument();
		expect(getByText(mockUser.address.city)).toBeInTheDocument();
		expect(getByText(mockUser.address.street)).toBeInTheDocument();
		expect(getByText(mockUser.address.zip)).toBeInTheDocument();
		expect(getByText(mockUser.gender)).toBeInTheDocument();
		expect(getByText(mockUser.age)).toBeInTheDocument();
	});
});
