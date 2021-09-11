import Header from "../UI/Header";

// Component

const MainLayout = props => {
	return (
		<>
			<Header />
			<section className='content-container'>{props.children}</section>
		</>
	);
};

export default MainLayout;
