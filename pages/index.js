import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className='login-user'>
				<div className='login-user__top'>
					<div className='login-user__logo' />
					<span className='login-user__title'>Who is Watching</span>
				</div>
				<div className='login-user__form'>
					<div className='login-user__user-box'>
						<img
							src='https://images.unsplash.com/photo-1549351512-c5e12b11e283?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
							alt=''
							className='login-user__user-img'
						/>
						<div className='login-user__user-name'>Julie</div>
					</div>
				</div>
				<div className='login-user__buttons'>
					<button className='login-user__adult'>Add Adult</button>
					<button className='login-user__kid'>Add Kid</button>
				</div>
			</div>
		</div>
	);
}
