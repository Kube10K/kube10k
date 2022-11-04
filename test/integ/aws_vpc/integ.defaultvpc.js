"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const stacks_1 = require("../../../src/aws_vpc/stacks");
const env = {
    region: process.env.CDK_INTEG_REGION ||
        process.env.CDK_DEFAULT_REGION ||
        process.env.AWS_DEFAULT_REGION,
    account: process.env.CDK_INTEG_ACCOUNT ||
        process.env.CDK_DEFAULT_ACCOUNT ||
        process.env.AWS_DEFAULT_ACCOUNT,
};
const app = new aws_cdk_lib_1.App();
const stack = new aws_cdk_lib_1.Stack(app, "root", {
    env: env,
    synthesizer: new aws_cdk_lib_1.DefaultStackSynthesizer({
        qualifier: "default",
    }),
});
new stacks_1.NestedVpcStack(stack, "vpc", {});
new integ_tests_alpha_1.IntegTest(app, "IntegTest", {
    testCases: [stack],
    cdkCommandOptions: {
        deploy: {
            args: {
                toolkitStackName: "StackSet-GLOBAL-SETTINGS-CDKBootstrap-5294d4d8-b05f-46b7-b0bb-b67184e13548",
            },
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuZGVmYXVsdHZwYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLmRlZmF1bHR2cGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBdUQ7QUFDdkQsNkNBQWtFO0FBQ2xFLHdEQUE2RDtBQUU3RCxNQUFNLEdBQUcsR0FBRztJQUNWLE1BQU0sRUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtJQUNoQyxPQUFPLEVBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7Q0FDbEMsQ0FBQztBQUVGLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFO0lBQ25DLEdBQUcsRUFBRSxHQUFHO0lBQ1IsV0FBVyxFQUFFLElBQUkscUNBQXVCLENBQUM7UUFDdkMsU0FBUyxFQUFFLFNBQVM7S0FDckIsQ0FBQztDQUNILENBQUMsQ0FBQztBQUNILElBQUksdUJBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXJDLElBQUksNkJBQVMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFO0lBQzlCLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNsQixpQkFBaUIsRUFBRTtRQUNqQixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUU7Z0JBQ0osZ0JBQWdCLEVBQ2QsNEVBQTRFO2FBQy9FO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVnVGVzdCB9IGZyb20gXCJAYXdzLWNkay9pbnRlZy10ZXN0cy1hbHBoYVwiO1xuaW1wb3J0IHsgQXBwLCBEZWZhdWx0U3RhY2tTeW50aGVzaXplciwgU3RhY2sgfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCB7IE5lc3RlZFZwY1N0YWNrIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hd3NfdnBjL3N0YWNrc1wiO1xuXG5jb25zdCBlbnYgPSB7XG4gIHJlZ2lvbjpcbiAgICBwcm9jZXNzLmVudi5DREtfSU5URUdfUkVHSU9OIHx8XG4gICAgcHJvY2Vzcy5lbnYuQ0RLX0RFRkFVTFRfUkVHSU9OIHx8XG4gICAgcHJvY2Vzcy5lbnYuQVdTX0RFRkFVTFRfUkVHSU9OLFxuICBhY2NvdW50OlxuICAgIHByb2Nlc3MuZW52LkNES19JTlRFR19BQ0NPVU5UIHx8XG4gICAgcHJvY2Vzcy5lbnYuQ0RLX0RFRkFVTFRfQUNDT1VOVCB8fFxuICAgIHByb2Nlc3MuZW52LkFXU19ERUZBVUxUX0FDQ09VTlQsXG59O1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5jb25zdCBzdGFjayA9IG5ldyBTdGFjayhhcHAsIFwicm9vdFwiLCB7XG4gIGVudjogZW52LFxuICBzeW50aGVzaXplcjogbmV3IERlZmF1bHRTdGFja1N5bnRoZXNpemVyKHtcbiAgICBxdWFsaWZpZXI6IFwiZGVmYXVsdFwiLFxuICB9KSxcbn0pO1xubmV3IE5lc3RlZFZwY1N0YWNrKHN0YWNrLCBcInZwY1wiLCB7fSk7XG5cbm5ldyBJbnRlZ1Rlc3QoYXBwLCBcIkludGVnVGVzdFwiLCB7XG4gIHRlc3RDYXNlczogW3N0YWNrXSxcbiAgY2RrQ29tbWFuZE9wdGlvbnM6IHtcbiAgICBkZXBsb3k6IHtcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgdG9vbGtpdFN0YWNrTmFtZTpcbiAgICAgICAgICBcIlN0YWNrU2V0LUdMT0JBTC1TRVRUSU5HUy1DREtCb290c3RyYXAtNTI5NGQ0ZDgtYjA1Zi00NmI3LWIwYmItYjY3MTg0ZTEzNTQ4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdfQ==