interface CvPageContainerProps {
    children: React.ReactNode;
}

export const CvPageContainer = ({ children }: CvPageContainerProps) => {
    return (
        <div
            style={{ width: "calc(28cm * 0.707)", height: "28cm" }}
            className={`bg-white drop-shadow`}
        >
            {children}
        </div>
    );
};
