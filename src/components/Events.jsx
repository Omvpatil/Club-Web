import React, { useEffect, useState } from "react";
import poster from "../assets/acc2.avif";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import { NavLink, useLocation, useNavigate } from "react-router";

const Events = () => {
	const navigate = useNavigate();
	const [events, setEvents] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("http://127.0.0.1:8000/events");
				if (response.ok) {
					const result = await response.json();
					setEvents(result);
					console.log(events);
				} else {
					throw new Error(`Response Status :${response.status}`);
				}
			} catch (error) {
				console.error(error.message);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="Apps flex text-white p-16 max-md:flex-col max-md:p-5 gap-16 max-md:gap-10 max-md:h-full max-md:w-full h-screen w-screen flex-shrink-0 justify-center items-end ">
			{/* Left Section */}
			<section className="h-5/6 w-full text-white flex flex-col justify-evenly gap-28 max-md:gap-5">
				<h1 className="text-7xl">
					<span className="border-b border-white/50">Events</span>
				</h1>

				{/* Upcoming Events */}
				<div className="bg-white/5 border flex flex-col max-md:w-full max-md:h-full border-white/20 p-5">
					<h2 className="text-2xl font-semibold mb-4 border-b border-white/50 pb-2">
						Upcoming
					</h2>
					<ul className=" flex flex-col w-full h-full">
						{events.map((event) => {
							<NavLink
								key={event.id}
								to={"/register"}
								state={{ event: event.name }}
							>
								{event.name}
							</NavLink>;
						})}
						<NavLink to={"/register"} state={{ event: "Pixel Perfect" }}>
							PIXEL PERFECT
						</NavLink>
						<NavLink to={"/register"} state={{ event: "Gen-Ai" }}>
							GEN-AI
						</NavLink>
					</ul>
				</div>

				{/* Past Events */}
				<div className="bg-white/5 border border-white/20 p-5">
					<h2 className="text-2xl font-semibold border-b border-white/50 pb-2">
						Past Events
					</h2>
					<ul className="space-y-2">
						<li>PROMPT QUEST</li>
						<li>PIXEL PERFECT</li>
						<li>GEN-AI</li>
					</ul>
				</div>
			</section>

			{/* Right Section */}
			<section className="h-fit w-fit border border-white/20 backdrop-blur-xl bg-white/5 flex flex-col justify-between items-center">
				<div className="border-b border-white/50 h-full w-[95%]">
					<div className="text-white text-2xl p-4">
						<div>Registration Fees</div>
						Free
					</div>
					<div className="text-2xl p-5 flex flex-col text-wrap gap-2">
						<div className="text-purple-500">Register Now</div>
						<button className="rounded-full bg-purple-500/10 h-[50px] w-[50px] flex items-center justify-center">
							<ArrowOutwardSharpIcon style={{ color: "white" }} />
						</button>
					</div>
				</div>
				<div className="h-full object-contain p-5">
					<img src="./src/assets/acc2.avif" alt="" />
				</div>
			</section>
		</div>
	);
};

export default Events;
