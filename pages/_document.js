// import Document, { Html, Head, Main, NextScript } from "next/document";

// class MyDocument extends Document {
// 	static async getInitialProps(ctx) {
// 		const initialProps = await Document.getInitialProps(ctx);
// 		return { ...initialProps };
// 	}

// 	render() {
// 		return (
// 			<Html>
// 				<Head>
// 					<meta charSet='utf-8' />

// 					<link rel='preconnect' href='https://fonts.googleapis.com' />
// 					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
// 					<link
// 						href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'
// 						rel='stylesheet'
// 					></link>
// 					<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />

// 					<link
// 						rel='stylesheet'
// 						href='https://use.fontawesome.com/releases/v5.13.1/css/all.css'
// 						integrity='sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q'
// 						crossorigin='anonymous'
// 					></link>
// 				</Head>
// 				<body>
// 					<Main />
// 					<NextScript />
// 				</body>
// 			</Html>
// 		);
// 	}
// }

// export default MyDocument;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8' />

					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'
						rel='stylesheet'
					></link>
					<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />

					<link
						rel='stylesheet'
						href='https://use.fontawesome.com/releases/v5.13.1/css/all.css'
						integrity='sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q'
						crossorigin='anonymous'
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
