import { createUseStyles } from "react-jss";
import { Theme, headerHeight } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    main: {
        height: `calc(100% - ${headerHeight});`
    }
}))