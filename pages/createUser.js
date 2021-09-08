import Head from "next/head";
import Image from "next/image";

export default function CreateUser() {
	return (
		<div>
			<div className='create-user'>
				<div className='create-user__top'>
					<div className='create-user__logo' />
					<span className='create-user__title'>Who is Watching!</span>
				</div>
				<div className='create-user__form'>
					<img
						src='https://images.unsplash.com/photo-1549351512-c5e12b11e283?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
						alt=''
						className='create-user__user-img'
					/>
					<div className='create-user__input-group'>
						<label>Name</label>
						<input type='text' className='create-user__inputText' />
						<div className='create-user__colors'>
							<div
								className='create-user__color create-user__color--active'
								style={{
									background: "rgb(2,27,64)",
									background:
										"linear-gradient(135deg, rgba(2,27,64,1) 0%, rgba(119,30,135,1) 100%)",
								}}
							/>
							<div
								className='create-user__color'
								style={{
									background: "rgb(0,64,100)",
									background:
										"linear-gradient(135deg, rgba(2,27,64,1) 0%, rgba(135,134,30,1) 100%)",
								}}
							/>
							<div
								className='create-user__color'
								style={{
									background: "rgb(2,27,64)",
									background:
										"linear-gradient(135deg, rgba(2,27,64,1) 0%, rgba(30,135,31,1) 100%)",
								}}
							/>
							<div
								className='create-user__color'
								style={{
									background: "rgb(2,27,64)",
									background:
										"linear-gradient(135deg, rgba(2,27,64,1) 0%, rgba(30,134,135,1) 100%)",
								}}
							/>
							<div
								className='create-user__color'
								style={{
									background: "rgb(2,27,64)",
									background:
										"linear-gradient(135deg, rgba(2,27,64,1) 0%, rgba(135,30,30,1) 100%)",
								}}
							/>
						</div>
					</div>
				</div>
				<div className='create-user__buttons'>
					<button className='create-user__cancel'>Cancel</button>
					<button className='create-user__save'>Save</button>
				</div>
			</div>
		</div>
	);
}
