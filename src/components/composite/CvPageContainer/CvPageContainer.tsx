interface CvPageContainerProps {
    children: React.ReactNode;
}

export const CvPageContainer = ({ children }: CvPageContainerProps) => {
    return (
        <div
            style={{ width: "calc(25cm * 0.707)", height: "25cm" }}
            className={`bg-white drop-shadow`}
        >
            {children}
        </div>
    );
};
