import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "./ui/button";

gsap.registerPlugin(useGSAP);

export default function Start() {
	const container = useRef<HTMLDivElement>(null);

	const { contextSafe } = useGSAP({ scope: container });

	const handleSelect = contextSafe(() => {
		gsap.to(".box", { x: "100" });
	});

	return (
		<div className="App">
			<div ref={container} className="container">
				<div className="box gradient-blue w-fit px-8 py-5  rounded-full">
					selector
				</div>
				<Button onClick={handleSelect}>START</Button>
			</div>
		</div>
	);
}
