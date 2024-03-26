import Router from "express";
const router = Router();
import userRouter from "./userRouter.js";
import deviceRouter from "./deviceRouter.js";
import typeRouter from "./typeRouter.js";
import brandRouter from "./brandRouter.js";

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

export default router;