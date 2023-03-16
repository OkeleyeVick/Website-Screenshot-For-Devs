import "../animations/animation.css";

const Loader = () => {
	return (
		<div className="fixed inset-0 flex items-center justify-center glassmorphism z-50">
			<div className="cube scale-50 md:scale-100">
				<div className="topD"></div>
				<div>
					<span style={{ "--i": 0 }}></span>
					<span style={{ "--i": 1 }}></span>
					<span style={{ "--i": 2 }}></span>
					<span style={{ "--i": 3 }}></span>
				</div>

				<div className="cube2">
					<div>
						<span style={{ "--i": 0 }}></span>
						<span style={{ "--i": 1 }}></span>
						<span style={{ "--i": 2 }}></span>
						<span style={{ "--i": 3 }}></span>
					</div>

					<div className="cube3">
						<div className="top3"></div>
						<div>
							<span style={{ "--i": 0 }}></span>
							<span style={{ "--i": 1 }}></span>
							<span style={{ "--i": 2 }}></span>
							<span style={{ "--i": 3 }}></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
