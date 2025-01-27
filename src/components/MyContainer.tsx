import React from "react";
import { useTranslation } from "react-i18next";

interface MyContainerProps {

}

const MyContainer:React.FC<MyContainerProps> = () => {
    const { t } = useTranslation();



    return (
        <div>
        {t('This is the front page')}
        </div>
    );
};

export default MyContainer;