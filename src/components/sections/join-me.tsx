"use client";

import { openContactComposer } from "@/components/contact-composer";
import { motion } from "framer-motion";
import { ANIMATION_VARIANTS, SITE_CONFIG } from "@/lib/constants";
import { joinMeItems } from "@/data/join-me-items";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";
import {
	GradientText
} from "@/components/animations";
import { MdLocalOffer } from "react-icons/md";

export function JoinMe() {
	return (
		<section className="py-12 px-4">
			<div className="mx-auto max-w-7xl">
				<div className="relative mb-6 text-center">
					<h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
						Join <GradientText>Me</GradientText>
					</h2>
					<p className="text-lg max-w-2xl mx-auto">
						Come and join me in building the future!
					</p>
				</div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={ANIMATION_VARIANTS.fadeUp}
					transition={{ delay: 0.2 }}
					className="mb-8"
				>
					{joinMeItems.map((item, index) => (
						<div key={item.title} className="grid md:grid-cols-4 gap-12 items-start">
							<div className="space-y-6 md:col-span-3 text-lg leading-relaxed">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={ANIMATION_VARIANTS.fadeUp}
									transition={{ delay: index * 0.1 }}
								>
									<Card className="flex flex-col group h-full overflow-hidden hover:shadow-xl transition-all duration-300">

										<CardHeader>
											<h3 className="text-2xl font-bold text-center group-hover:text-primary transition-colors line-clamp-2">
												{item.title}
											</h3>
										</CardHeader>
										<CardContent className="flex-grow flex flex-col">
											<p className="flex-grow mb-4 text-sm leading-relaxed">
												{item.overview}
											</p>
											<div className="space-y-1 mb-4">
												{item.requirements.map((req, idx) => <div className="mb-2" key={req.items + '_' + idx}>
													<h4 className="text-lg font-bold italic font font-semibold mb-1">{req.name}</h4>
													{req.items.map((point, i) => <p key={req.items + '_' + idx + '-' + i} className="text-sm flex items-start">
														<span className="mr-2 text-primary">•</span>
														<span className="line-clamp-2">{point}</span>
													</p>)}
												</div>)}
											</div>
										</CardContent>
										<div className="relative h-160 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
											{item.image && (
												<Image
													src={item.image}
													alt={item.title}
													fill
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 72vw, 48vw"
													onError={(e) => {
														console.error(`Failed to load image: ${item.image}`);
														e.currentTarget.style.display = 'none';
													}}
												/>
											)}
										</div>
									</Card>
								</motion.div>
							</div>
							<div className="w-full md:col-span-1 space-y-4">

								<h2 className="text-xl font-bold text-center">What I offer?</h2>
								{item.delivers && item.delivers.length > 0 && item.delivers.map((deliver, i) =>
									<div key={item.title + '_deliver-' + i} className="flex items-center p-2 space-x-4 rounded-lg border bg-card hover:shadow-lg transition-shadow">
										<div className="p-2 rounded-full bg-primary/10 text-primary">
											<MdLocalOffer className="h-6 w-6" />
										</div>
										<h3 className="text-sm font-semibold">{deliver}</h3>
									</div>)}
								<div className="border-b border-muted-foreground/20 my-6" />
								<motion.a
									href={`mailto:${SITE_CONFIG.links.email}`}
                                    onClick={event => { event.preventDefault(); openContactComposer(); }}
									target="_blank"
									rel="noopener noreferrer"
									className="relative h-12 rounded-full flex items-center border border-border text-muted-foreground hover:text-primary transition-all duration-300 overflow-hidden group"
									whileHover={{ scale: 1.05, }}
									whileTap={{ scale: 0.95 }}
								>
									<div
										className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										style={{ background: "rgba(216, 178, 242, 0.2)" }}
									/>
									<div className="p-2 mr-4 rounded-full bg-primary/10 text-primary">
										<Mail className="h-8 w-8 relative z-10" />
									</div>
									<h3 className="font-semibold">Contact me</h3>
								</motion.a>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
