import emojiAvatar1 from "@/assets/images/emoji-avatar-1.png";
import emojiAvatar2 from "@/assets/images/emoji-avatar-2.png";
import emojiAvatar3 from "@/assets/images/emoji-avatar-3.png";
import emojiAvatar4 from "@/assets/images/emoji-avatar-4.png";
import emojiAvatar5 from "@/assets/images/emoji-avatar-5.png";
import emojiAvatar6 from "@/assets/images/emoji-avatar-6.png";
import emojiAvatar7 from "@/assets/images/emoji-avatar-7.png";
import emojiAvatar8 from "@/assets/images/emoji-avatar-8.png";
import emojiAvatar9 from "@/assets/images/emoji-avatar-9.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Sophie Müller",
    position: "Project Manager @ BrightWorks",
    text: "Great work and fast delivery. Highly recommended! Communication was clear throughout the project. Would definitely collaborate again.",
    avatar: emojiAvatar1,
  },
  {
    name: "Lucas Smith",
    position: "Developer @ CodeBase",
    text: "Very professional and easy to work with. The project was completed on time and met all requirements. I appreciate the attention to detail.",
    avatar: emojiAvatar2,
  },
  {
    name: "James Wilson",
    position: "CTO @ NextGen",
    text: "Quick turnaround and solid code. The implementation was efficient and reliable. Support after delivery was excellent.",
    avatar: emojiAvatar3,
  },
  {
    name: "Benjamin Clark",
    position: "Engineer @ TechFlow",
    text: "Smooth process from start to finish. All questions were answered promptly. The final product exceeded expectations.",
    avatar: emojiAvatar4,
  },
  {
    name: "Olivia Brown",
    position: "Marketing Lead @ AdVision",
    text: "Fantastic job, met all our needs. The team was responsive and proactive. We saw great results from the project.",
    avatar: emojiAvatar5,
  },
  {
    name: "Ethan Miller",
    position: "CEO @ StartUpHub",
    text: "Delivered exactly what we wanted. The process was transparent and updates were frequent. Highly recommend for any project.",
    avatar: emojiAvatar6,
  },
  {
    name: "Emma Davis",
    position: "Designer @ PixelArt",
    text: "Loved the results. Will hire again! The design process was smooth and feedback was always welcomed.",
    avatar: emojiAvatar7,
  },
  {
    name: "Henry Walker",
    position: "Lead Dev @ AppForge",
    text: "Great communication and skills. The project was delivered ahead of schedule. Collaboration was seamless and productive.",
    avatar: emojiAvatar8,
  },
  {
    name: "William Harris",
    position: "Manager @ BuildRight",
    text: "Very satisfied with the outcome. The work was thorough and well-documented. Would work together again in the future.",
    avatar: emojiAvatar9,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Client"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my
        work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4 max-w-[66rem]">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center overflow-hidden shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="size-10 max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </div>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
