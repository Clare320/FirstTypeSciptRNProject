module.exports = {
    getTransformModulePath() {
        return require.resolve("react-native-typescript-tranformer");
    },
    getSourceExts() {
        return ["ts", "tsx"];
    }
};