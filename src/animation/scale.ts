import { gsap } from 'gsap';
export const onEnter = ({
    currentTarget,
}: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(currentTarget, { scale: 1.07, duration: 1, ease: 'power1.inOut' });
};
export const onLeave = ({
    currentTarget,
}: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(currentTarget, { scale: 1, duration: 1, ease: 'power1.inOut' });
};

export const onClick = ({
    currentTarget,
}: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(currentTarget, { opacity: 0 });
};
