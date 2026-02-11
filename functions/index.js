const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * Deletes a user from Auth and Firestore.
 *
 * @param {{uid: string}} data - The data passed to the function.
 * @param {functions.https.CallableContext} context - The call context.
 * @returns {Promise<{result: string}>} A success message.
 * @throws {functions.https.HttpsError} If the user is not authenticated,
 *   the UID is missing, or if deletion fails.
 */
exports.deleteUser = functions.https.onCall(async (data, context) => {
  // Check if the user calling the function is authenticated.
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "You must be logged in to delete a user.",
    );
  }

  const {uid} = data;

  // Check if a UID was passed.
  if (!uid) {
    throw new functions.https.HttpsError(
        "invalid-argument",
        "The function must be called with a 'uid' argument.",
    );
  }

  try {
    // Delete from Firebase Authentication.
    await admin.auth().deleteUser(uid);
    functions.logger.info(`Deleted user with UID: ${uid} from Auth.`);

    // Delete from Firestore.
    const userDocRef = admin.firestore().collection("users").doc(uid);
    await userDocRef.delete();
    functions.logger.info(`Deleted Firestore doc for UID: ${uid}.`);

    return {result: `Successfully deleted user ${uid}`};
  } catch (error) {
    functions.logger.error(`Error deleting user ${uid}:`, error);

    // Throw an error for the client-side to handle.
    throw new functions.https.HttpsError(
        "internal",
        "An error occurred while deleting the user.",
        error.message,
    );
  }
});
